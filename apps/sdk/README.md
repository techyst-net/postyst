# Postyst NodeJS SDK

This is the NodeJS SDK for [Postyst](https://postyst.techyst.net).

You can start by installing the package:

```bash
npm install @postiz/node
```

## Usage
```typescript
import Postyst from '@postiz/node';
const postiz = new Postyst('your api key', 'your self-hosted instance (optional)');
```

The available methods are:
- `post(posts: CreatePostDto)` - Schedule a post to Postyst
- `postList(filters: GetPostsDto)` - Get a list of posts
- `upload(file: Buffer, extension: string)` - Upload a file to Postyst
- `integrations()` - Get a list of connected channels
- `deletePost(id: string)` - Delete a post by ID

Alternatively you can use the SDK with curl, check the [Postyst API documentation](https://postyst.techyst.net) for more information.