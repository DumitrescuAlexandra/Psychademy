// import { db } from "../Firebase/index";
// import { collection, query, where, getDocs } from "firebase/firestore";
const FIREBASE_DOMAIN =
  "https://psychademy-default-rtdb.europe-west1.firebasedatabase.app";

export async function getAllEntries() {
  const response = await fetch(`${FIREBASE_DOMAIN}/entries.json`);
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

// export async function addEntry(entryData) {
//   const response = await fetch(`${FIREBASE_DOMAIN}/entries.json`, {
//     method: "POST",
//     body: JSON.stringify(entryData),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   });
//   const data = await response.json();

//   if (!response.ok) {
//     throw new Error(data.message || "Could not create entry.");
//   }

//   return null;
// }
