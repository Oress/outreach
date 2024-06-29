**Requirements:**
---
1. Create, and schedule email campaigns.
2. CRUD the lists of email addresses.
   1. 1 global email list.
   2. Subsets of email addresses differentiated by some criteria (tags).
3. Import and export email addresses. (CSV format);
5. Setup automated email workflows based on user actions.
6. Personalization: Personalize email content using user data. Templates.
7. A/B Testing: Enable users to test different email versions.
   1. (A/B Distribution, winning metric, duration)
   2. Be able to attach it to a campaign.


Campaigns API
---
```
POST /campaigns - Create a new campaign.
GET /campaigns - Retrieve all campaigns.
GET /campaigns/{id} - Retrieve a specific campaign.
PUT /campaigns/{id} - Update a specific campaign.
DELETE /campaigns/{id} - Delete a specific campaign.
POST /campaigns/{id}/schedule - Schedule a specific campaign.
```

Email Lists API
---
```
GET /emails - Retrieve all email lists.
GET /emails - Retrieve all email lists.
POST /emails/import - Import email addresses to a global list.
GET /emails/export - Export email addresses from a global list.


POST /email-lists - Create a new email list.
GET /email-lists - Retrieve all email lists.
GET /email-lists/{id} - Retrieve a specific email list.
PUT /email-lists/{id} - Update a specific email list.
DELETE /email-lists/{id} - Delete a specific email list.
```

Sublists API
---
```
POST /sublists - Create a new sublist.
GET /sublists - Retrieve all sublists.
GET /sublists/{id} - Retrieve a specific sublist.
PUT /sublists/{id} - Update a specific sublist.
DELETE /sublists/{id} - Delete a specific sublist.
```

Automated Workflows API  
---
```
POST /workflows - Create a new workflow.
GET /workflows - Retrieve all workflows.
GET /workflows/{id} - Retrieve a specific workflow.
PUT /workflows/{id} - Update a specific workflow.
DELETE /workflows/{id} - Delete a specific workflow.
```

Templates API  
---
```
POST /templates - Create a new template.
GET /templates - Retrieve all templates.
GET /templates/{id} - Retrieve a specific template.
PUT /templates/{id} - Update a specific template.
DELETE /templates/{id} - Delete a specific template.
```


A/B Testing API  
---
```
POST /ab-tests - Create a new A/B test.
GET /ab-tests - Retrieve all A/B tests.
GET /ab-tests/{id} - Retrieve a specific A/B test.
PUT /ab-tests/{id} - Update a specific A/B test.
DELETE /ab-tests/{id} - Delete a specific A/B test.
```
