export const resolver = {
    Query: {
        user:(root: any, { id }: any) => {
            return {
                name: "Gago",
                lastname: "Simonyan",
                id,
                age: 123214567,
            }
        }
    }
}