/* eslint-disable */
export default async () => {
    const t = {
        ["./post/entities/post.entity"]: await import("./post/entities/post.entity")
    };
    return { "@nestjs/graphql": { "models": [[import("./author/dto/create-author.input"), { "CreateAuthorInput": { exampleField: {} } }], [import("./author/dto/update-author.input"), { "UpdateAuthorInput": { id: {} } }], [import("./defaults/default.entity"), { "DefaultEntity": { id: {} } }], [import("./post/entities/post.entity"), { "Post": { votes: { nullable: true, type: () => Number, description: "This comment will not appear" }, foo: { nullable: true, type: () => String }, bar: { nullable: true, type: () => String }, title: {} } }], [import("./author/entities/author.entity"), { "Author": { firstName: { nullable: true, type: () => String, description: "This comment will appear" }, lastName: { nullable: true, type: () => String }, posts: { type: () => [t["./post/entities/post.entity"].Post] } } }], [import("./post/dto/create-post.input"), { "CreatePostInput": {} }], [import("./post/dto/update-post.input"), { "UpdatePostInput": { id: {} } }]] } };
};