# A web project for YouTube Video Editors

## API Documentation

_Customer_\
[Available Editors](#available-editors)\
[Owned Editors](#owned-editors)\
_Admin_\
[Project Information](#project-information)\
[Update User Rank](#update-user-rank)

### Available Editors

> Customer Permission Needed

|                                        URL                                         | Method | Response Type | Queries | Body |
| :--------------------------------------------------------------------------------: | :----: | :-----------: | :-----: | :--: |
| [/customer/editors/available](/controllers/customer/availableEditorsController.js) |  GET   |     JSON      |    -    |  -   |

### Owned Editors

> Customer Permission Needed

|                                    URL                                     | Method | Response Type | Queries | Body |
| :------------------------------------------------------------------------: | :----: | :-----------: | :-----: | :--: |
| [/customer/editors/owned](/controllers/customer/ownedEditorsController.js) |  GET   |     JSON      |    -    |  -   |

## Project Information

> Admin Permission Needed

|                                       URL                                        | Method | Response Type | Queries | Body |
| :------------------------------------------------------------------------------: | :----: | :-----------: | :-----: | :--: |
| [/admin/project/information](/controllers/admin/projectInformationController.js) |  GET   |     JSON      |    -    |  -   |

## Update User Rank

> Admin Permission Needed

|                              URL                               | Method | Response Type | Queries |         Body          |
| :------------------------------------------------------------: | :----: | :-----------: | :-----: | :-------------------: |
| [/admin/user/rank](/controllers/admin/updateRankController.js) |  POST  |     JSON      |    -    | `id (user id)` `rank` |

## Ranks

| Rank Name |                     Description                      |
| :-------: | :--------------------------------------------------: |
|   Owner   |              Have access to all things               |
| Developer | Have access to all things except high order commands |
|   Admin   |   Have access to all things except security things   |
| Supporter |         Have access to support needed things         |
|  Editor   |     Have editor panel and can see freelance page     |
| Customer  |   Can see editors page, can submit project and...    |

## Error Codes

| Error Code |                          Description                          |
| :--------: | :-----------------------------------------------------------: |
|    2000    | Token is in BlackList or session is invalid (Clear the token) |
|    2001    |                      Token is not found                       |
|    2002    |                Token is valid (user logged in)                |
|    2003    |                   User have not permission                    |
|    2004    |                  Needed parameters undefined                  |
|    2005    |                        User not found                         |
|    2006    |                   Invalid Parameters Value                    |
