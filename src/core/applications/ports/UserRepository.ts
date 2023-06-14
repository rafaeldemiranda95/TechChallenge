interface UserRepository {
    save(user: User): void;
    find(id: number): User;
    remove(id: number): void;
}