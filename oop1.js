class Mail {
    constructor(author, data, cask, letuc) {
      this.from = author;
      this.data = data;
      this.cask = cask;
      this.id = letuc;

      this._contacts = [];
    }
  
    sendMessage(msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
      this._contacts.push(to);
    }
  
    showAllContacts() {
      return this._contacts;
    }
  
}

class WhatsApp extends Mail {
constructor(username, isBusinessAccount, asd, dsa, foo) {
    super(asd, dsa, foo);
    this.username = username;
    this.isBusinessAccount = isBusinessAccount;
}
callerStat = () => console.log(`the caller ${this.username} is calling with a ${this.isBusinessAccount ? 'business account' : 'non-business account'} with shield protection ${this.cask ? 'on' : 'off'}`)
}

const wa1 = new WhatsApp('ahmadsan', true, 'dis from', 'charel', 'solid foo');


wa1.callerStat()
console.log(wa1.from);
console.log(wa1.data);
console.log(wa1.isBusinessAccount)
console.log(wa1.cask);