# List API

## User

- ### Register

  - URL: _api/v1/users/register_
  - Method: **POST**
  - Request
    - body
      | Key | Value |
      | ----------- | ----------- |
      | email | String, required |
      | password | String, required |

  - Response
  
    ```json
    {
      "token": "string", // jwt token
    }
    ```

- ### Login

  - URL: _api/v1/users/login_
  - Method: **POST**
  - Request
    - body
      | Key | Value |
      | ----------- | ----------- |
      | email | String, required |
      | password | String, required |

  - Response
  
    ```json
    {
      "token": "string", // jwt token
    }
    ```

## Reflection

- ### Get Reflection

  - URL: _api/v1/reflection_
  - Method: **GET**
  - Request
    - headers `x-acess-token` string token generate by `jwt`
  - Response
  
    ```json
    {
      "data": [
        {
          "id": "uuid",
          "success": "string",
          "low_point": "string",
          "take_away": "string",
          "owner_id": "uuid",
          "created_date": "timestamp",
          "modified_date": "timestamp"
        }
      ]
    }
    ```
  
- ### Create Reflection

  - URL: _api/v1/reflection_
  - Method: **POST**
  - Request
    - headers `x-acess-token` string token generate by `jwt`
    - body
      | Key | Value |
      | ----------- | ----------- |
      | success | String, required |
      | low_point | String, required |
      | take_way | String, required |

  - Response
  
    ```json
    {
      "id": "uuid",
      "success": "string",
      "low_point": "string",
      "take_away": "string",
      "owner_id": "uuid",
      "created_date": "timestamp",
      "modified_date": "timestamp"
    }
    ```

- ### Update Reflection

  - URL: _api/v1/reflection/:id_
  - Method: **PUT**
  - Request
    - headers `x-acess-token` string token generate by `jwt`
    - params `:id` id from reflection
    - body
      | Key | Value |
      | ----------- | ----------- |
      | success | String, required |
      | low_point | String, required |
      | take_way | String, required |

  - Response
  
    ```json
    {
      "id": "uuid",
      "success": "string",
      "low_point": "string",
      "take_away": "string",
      "owner_id": "uuid",
      "created_date": "timestamp",
      "modified_date": "timestamp"
    }
    ```

- ### Delete Reflection

  - URL: _api/v1/reflection/:id_
  - Method: **PUT**
  - Request
    - headers `x-acess-token` string token generate by `jwt`
    - params `:id` id from reflection
  - Response
  
    ```json
    {
      "id": "uuid",
      "success": "string",
      "low_point": "string",
      "take_away": "string",
      "owner_id": "uuid",
      "created_date": "timestamp",
      "modified_date": "timestamp"
    }
    ```
