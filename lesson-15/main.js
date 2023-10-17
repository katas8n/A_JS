import "./style.css";

// ! S -> Single responsibility > send messages
class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
    // this.status = "premium" || "base"
    // !  IT's not Single responsibility
    // this.mailbox = [];
  }

  getEmail() {
    return this.email;
  }

  // setEmail
  // setPassword
  // getEmail

  // ! IT's not Single responsibility
  isValid() {
    // too much
  }

  // ! IT's not Single responsibility
  sendMessage(text, consumer) {
    // const message = `
    // from : ${this.email}
    // to : ${consumer}
    // ${text}
    // `;
    // this.mailbox.push({ status: "sent", message: message });
    // consumer.mailbox.push(consumer);
  }

  // ! IT's not Single responsibility
  getMessage() {
    // console.log(this.mailbox);
  }
  // !
}

// ! O -> Open / Closed
// ! L -> Liskov substitution
// class PremiumUser extends User {
//   constructor(email, password, avatar) {
//     super(email, password);
//     this.avatar = avatar;
//   }

//   setAvatar(newAvatar) {
//     this.avatar = newAvatar;
//   }

//   getEmail() {
//     this.email + " [PREMIUM PASS]";
//   }
// }

// class Member extends PremiumUser {
//   constructor(email, password, avatar, coins) {
//     super(email, password, avatar);
//     this.coins = coins;
//   }

//   getCoins() {
//     return this.coins;
//   }

//   setCoins(amount) {
//     this.coins = amount;
//   }
// }

// class Mailbox {
//   constructor() {
//     this.mailbox = [];
//   }

//   getMailbox() {
//     return this.mailbox;
//   }
// }

// class Message {
//   constructor(text) {
//     this.text = text;
//   }

//   getText() {
//     return this.text;
//   }
// }

// const gmail = new Mailbox();
// const icloud = new Mailbox();

// const msg = new Message("Hello");

// const mike = new User("mike@i.ua", 2323);
// const john = new User("k@i.ua", 1313);

// const result = sendMessage(msg.getText(), john.getEmail(), mike.getEmail());

// pushMsg(gmail.getMailbox(), result);

// console.log("[gmail]", gmail.getMailbox());

//! I - interface segregation.
// function sendMessage(text, sender, consumer) {
//   const message = `
//     from : ${sender}
//     to : ${consumer}
//     ${text}
//     `;

//   return message;
// }

// function pushMsg(mailbox, msg) {
//   mailbox.push(msg);
// }

//! D Dependency Inversion

// ! Without SOLID
// class Lamp {
//   turnOn() {
//     console.log("Turned on");
//   }
// }

// class Switcher {
//   constructor(lamp) {
//     this.lamp = lamp;
//   }

//   action() {
//     this.lamp.turnOn();
//   }
// }
