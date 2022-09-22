import {
  Float,
  Mutation,
  Query,
  Resolver,
  Subscription,
} from '@nestjs/graphql';

import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver()
export class CoreResolver {
  @Query(() => Float)
  uptime() {
    return process.uptime();
  }

  @Subscription(() => String, {
    resolve: (value) => value,
  })
  commentAdded() {
    return pubSub.asyncIterator('commentAdded');
  }

  @Mutation(() => String)
  async addComment() {
    //   @Args('comment', { type: () => Comment }) comment: CommentInput, //   @Args('postId', { type: () => Int }) postId: number,
    const newComment = `Comment added - ${new Date().toISOString()}`;
    pubSub.publish('commentAdded', newComment);
    return newComment;
  }
}
