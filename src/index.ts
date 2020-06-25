// NOTE: This file will show errors until you installed Prisma Client in your project.

import { PrismaClient, UserGetPayload } from '@prisma/client';

const prisma = new PrismaClient();
type UserWithPosts = UserGetPayload<{ include: { posts: true } }>;

function getUserWithPostSentence(userWithPosts: UserWithPosts) {
    const sentence = `User ${userWithPosts.email} has written ${userWithPosts.posts.length} posts`;
    return sentence;
}

async function main() {
    // const newPost = await prisma.post.create({
    //   data: {
    //     title: '123',
    //   },
    // })
    // const newUser = await prisma.user.create({
    //     data: {
    //         name: 'Alice',
    //         email: 'alice@prisma.io',
    //     },
    // });
    // const result = await prisma.post.update({
    //     where: { id: 1 },
    //     data: {
    //         User: {
    //             connect: { email: 'alice@prisma.io' },
    //         },
    //     },
    // });
    // const post = await prisma.post.findOne({
    //     where: { id: 1 },
    //     include: {
    //         author: true,
    //     },
    // });
    // const result = await prisma.post.findMany()
    // console.log(newUser);
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.disconnect());
