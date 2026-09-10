# Zeshan NodeJS SDK

This is the NodeJS SDK for [Zeshan](https://zeshan.local).

You can start by installing the package:

```bash
npm install @postiz/node
```

## Usage
```typescript
import Zeshan from '@postiz/node';
const postiz = new Zeshan('your api key', 'your self-hosted instance (optional)');
```

The available methods are:
- `post(posts: CreatePostDto)` - Schedule a post to Zeshan
- `postList(filters: GetPostsDto)` - Get a list of posts
- `upload(file: Buffer, extension: string)` - Upload a file to Zeshan
- `integrations()` - Get a list of connected channels
- `deletePost(id: string)` - Delete a post by ID

Alternatively you can use the SDK with curl, check the [Zeshan API documentation](https://zeshan.local) for more information.