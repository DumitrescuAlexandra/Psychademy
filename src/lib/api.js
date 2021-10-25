const FIREBASE_DOMAIN =
  "https://psychademy-default-rtdb.europe-west1.firebasedatabase.app";

export async function getAllQuotes() {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch entries.");
  }

  const transformedEntries = [];

  for (const key in data) {
    const entryObj = {
      id: key,
      ...data[key],
    };

    transformedEntries.push(entryObj);
  }

  return transformedEntries;
}

export async function getSingleEntry(entryId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/entries/${entryId}.json`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not fetch entry.");
  }

  const loadedEntry = {
    id: entryId,
    ...data,
  };

  return loadedEntry;
}

export async function addEntry(entryData) {
  const response = await fetch(`${FIREBASE_DOMAIN}/entries.json`, {
    method: "POST",
    body: JSON.stringify(entryData),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not create entry.");
  }

  return null;
}

export async function addComment(requestData) {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${requestData.quoteId}.json`,
    {
      method: "POST",
      body: JSON.stringify(requestData.commentData),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not add comment.");
  }

  return { commentId: data.name };
}

export async function getAllComments(entryId) {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${entryId}.json`);

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Could not get comments.");
  }

  const transformedComments = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      ...data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
}
