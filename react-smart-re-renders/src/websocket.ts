import io, { Socket } from "socket.io-client";

export class WebSocket {
  private static instance: WebSocket;
  private socket: Socket;

  private constructor() {
    this.socket = io("ws://localhost:3000");
  }

  public static getInstance(): WebSocket {
    if (!WebSocket.instance) {
      WebSocket.instance = new WebSocket();
    }
    return WebSocket.instance;
  }

  public connect() {
    this.socket.on("connect", () => {
      console.log("[Websocket] Connected to the server");
    });
  }

  public disconnect() {
    this.socket.on("disconnect", () => {
      console.log("[Websocket] Disconnected from the server");
    });
  }

  public sendMessage(event: string, message: unknown) {
    this.socket.emit(event, message);
  }

  public subscribe(event: string, callback: (data: unknown) => void) {
    this.socket.on(event, callback);
  }

  public unsubscribe(event: string, callback?: (data: unknown) => void) {
    this.socket.off(event, callback);
  }
}
