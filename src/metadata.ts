/* eslint-disable */
export default async () => {
    const t = {
        ["./post/entities/post.entity"]: await import("./post/entities/post.entity")
    };
    return { "@nestjs/graphql": { "models": [[import("./author/dto/create-author.input"), { "CreateAuthorInput": { exampleField: {} } }], [import("./author/dto/update-author.input"), { "UpdateAuthorInput": { id: {} } }], [import("./post/entities/post.entity"), { "Post": { title: { type: () => String }, votes: { nullable: true, type: () => Number }, id: {} } }], [import("./author/entities/author.entity"), { "Author": { firstName: { nullable: true, type: () => String }, lastName: { nullable: true, type: () => String }, posts: { type: () => [t["./post/entities/post.entity"].Post] }, id: {} } }], [import("./post/dto/create-post.input"), { "CreatePostInput": { exampleField: {} } }], [import("./post/dto/update-post.input"), { "UpdatePostInput": { id: {} } }]] } };
};