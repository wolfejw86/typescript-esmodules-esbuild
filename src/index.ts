import got from "got";

function myDecorator(
  _target: any,
  _key: string,
  descriptor: PropertyDescriptor
) {
  const old = descriptor.value;
  descriptor.value = async function () {
    console.log("I hooked into a method with a decorator!");
    await old.apply(this, arguments);
    console.log(
      "I hooked into after the method was run done - but this only works because it is a void method"
    );
  };
}

console.log(import.meta.url);
console.log("another one!");

class Main {
  @myDecorator()
  async run() {
    console.log("running run");
    console.log(
      await got.get("https://httpbin.org/ip", { resolveBodyOnly: true })
    );
    console.log("end of running run method");
  }
}

const m = new Main();
m.run();
