import { expect } from "chai";
import { UserManager } from "../data/userManager";
import { Message } from "../api/apis/user/api";
import { LoginRequest, RegisterRequest, Subscriber } from "../api/models";
import { User } from "../data/models";

class MockedUserManager implements UserManager {
  allMessages(): Promise<Array<Message>> {
    return new Promise<Array<Message>>((resolve, rejects) => {
      resolve([]);
    });
  }

  login(loginRequest: LoginRequest): Promise<User> {
    return new Promise<User>((resolve, rejects) => {
      resolve({ firstName: "", lastName: "", email: "" });
    });
  }

  logout(): Promise<Boolean> {
    return new Promise<Boolean>((resolve, rejects) => {
      resolve(true);
    });
  }

  messages(subscriber: Subscriber<Message>): void {}

  register(registerRequest: RegisterRequest): Promise<User> {
    return new Promise<User>((resolve, rejects) => {
      resolve({ firstName: "", lastName: "", email: "" });
    });
  }

  welcome(): void {}
}

const userManager = new MockedUserManager();

describe("UserManager", () => {
  describe("login failure", () => {
    let result = userManager.login({ email: "", password: "" });
    console.log("==" + result);
    expect(result).not.be.a.instanceOf(Promise.constructor);
  });
});
