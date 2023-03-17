/**
 * Problem: To make intermediate structure that will "protect" original structure
 */

type ServerResponse = Promise<string>;

interface Server {
  get(): ServerResponse;
}

const server: Server = {
  async get() {
    return "Response from server";
  },
};

interface ServerProxy {
  connections: number;
  maxAllowed: number;
}

const proxy: Server & ServerProxy = {
  connections: 0,
  maxAllowed: 2,
  async get() {
    if (this.connections >= this.maxAllowed) {
      console.log("Max connections exceeded");
      return "Max connections exceeded";
    }
    this.connections++;
    const response = await server.get();
    this.connections--;
    console.log("Response: " + response);
    return response;
  },
};

proxy.get(); // Response from server
proxy.get(); // Response from server
proxy.get(); // Max connections exceeded
proxy.get(); // Max connections exceeded
setTimeout(proxy.get, 500); // Response from server
