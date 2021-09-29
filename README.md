This is my very first attempt to develop a React.js app.

For the time being, I try to make it nice and functional for mobile, and the optimal resolution to be viewed at this istage would be: 360x640. After functionality will be fully implemented, I will make sure it will behave on all screen resolutions.

"Psychademy" is meant to be used by a psychotherapist in his daily private therapy sessions and in between them.

For regular visitors, the web platform aims to deliver general Cognitive Behavior Therapy insights and the therapist's background (to be created in a future phase). Also, for  people undergoing psychotherapy with our therapist, there is a "patient zone" where they can customize and improve their experience;

![image](https://user-images.githubusercontent.com/89261015/135237967-ac80b426-4272-45e1-b200-34406a4a86dd.png)
![image](https://user-images.githubusercontent.com/89261015/135238088-e4d3afb2-1611-4637-87f3-55673b155429.png)
![image](https://user-images.githubusercontent.com/89261015/135238637-ae7d8b97-aed1-41d7-9a3f-17f3af5e03b3.png)
![image](https://user-images.githubusercontent.com/89261015/135238688-815b9e59-4939-4458-b664-4b865651dfec.png)


Specifically, the will be 2 interfaces, one for the therapist (to be developed...) and one for patients.


As an authenticated user, one can have acces to: 
---> "Account settings" (where: 1) the password can be changed, 2: confidentiality policy can be reviwed and 3: the account can be deleted) 
---> "Journal" (where the patient can enter various kinds of thoughts, events, insights that can be discussed over during treatment sessions)
---> "Assignments" (in Cognitive Behavior Therapy the treatment is administered during in-between sessions as well, in the form of "homework". The patient has to practice what they learn during therapy sessions. This is the section where they receive the weekly task and have to upload it before the next session)
---> "Evolution graph" - with first login, at least every 24h, there is a moodcheck that the patient can perform. There is also a "skip" option. In this section, the patient can have an overview of their moods during the week and month. In case there are certain patterns, they can be discussed in therapy
---> log out
---> (to be added later) "My appointments" - possibility to schedule next meeting and have a look at the next scheduled one;
---> (to be added later) "Messages" - possibility to exchange messages with the therapist;

![image](https://user-images.githubusercontent.com/89261015/135239336-885f1faf-8b18-4602-bfe6-317e64ca3880.png)
![image](https://user-images.githubusercontent.com/89261015/135239395-e98c17a6-e391-40c3-a637-82581cf7ac39.png)


The therapist is the one that creates accounts for his clients, using the e-mail address from the Contract (or a different one, at patient's choice) and the phone number (also available in the said Contract) as password.

The Therapist page (in development) offers acces to:

---> Create new user
---> Patients (a list of all patients and details about each one of them, such as: contact phone nr, e-mail address, second-contact - the person to be contacted in case of an emergency, their Evolution Graph, assignments, a therappy notes section visible only to the therapist so on)
---> Agenda (meetings scheduled and available hours)
---> Message (possibility to message one or multiple patients - i.e: to wish them all a "happy new year"
---> log out

A lot of features are not yet functional and/or responsive, but this is still in development :).

Cheers!
