/**
 * Problem: initialization of complex object(tons of constructor arguments)
 */

// Simple example
// type User = {
//   name: string | null;
//   age: number | null;
// };

// interface UserBuilder {
//   setName(name: string): UserBuilder;
//   setAge(age: number): UserBuilder;
//   build(): User;
// }

// function createUserBuilder(): UserBuilder {
//   const user: User = {
//     name: null,
//     age: null,
//   };

//   return {
//     setName(name: string) {
//       user.name = name;
//       return this;
//     },
//     setAge(age: number) {
//       user.age = age;
//       return this;
//     },
//     build: () => user,
//   };
// }

// const userBuilder = createUserBuilder();

// const user = userBuilder.setName("Alex").setAge(22).build();

// console.log(user);

/**
 * Example with Director
 */

interface User {
  rights: {
    read: boolean;
    write: boolean;
  };
}

interface Builder {
  setRights(): Builder;
  build(): User;
}

type UserType = "admin" | "user";

interface Director {
  create(): User;
  setBuilder: (newBuilder: Builder) => void;
}
function createUserBuilder(): Builder {
  const user: User = {
    rights: {
      read: false,
      write: false,
    },
  };

  return {
    setRights() {
      user.rights = {
        read: true,
        write: false,
      };
      return this;
    },
    build: () => user,
  };
}

function createAdminBuilder(): Builder {
  const user: User = {
    rights: {
      read: false,
      write: false,
    },
  };

  return {
    setRights() {
      user.rights = {
        read: true,
        write: true,
      };
      return this;
    },
    build: () => user,
  };
}

function createBuilder(type: UserType): Builder {
  const builders = {
    user: createUserBuilder,
    admin: createAdminBuilder,
  };
  return builders[type]();
}

function createDirector(builder: Builder): Director {
  return {
    create() {
      builder.setRights();
      return builder.build();
    },
    setBuilder: (newBuilder: Builder) => (builder = newBuilder),
  };
}

const userBuilder = createBuilder("user");
const adminBuilder = createBuilder("admin");

const director = createDirector(userBuilder);

const newUser = director.create();

director.setBuilder(adminBuilder);

const newAdmin = director.create();
