import React, { useEffect, useRef } from "react";
import MacWindow from "./MacWindow";

import { Terminal } from "@xterm/xterm";
import { FitAddon } from "@xterm/addon-fit";

import "./cli.scss";
import "@xterm/xterm/css/xterm.css";

const CLI = ({ windowName, setWindowsState }) => {
  const terminalRef = useRef(null);

  useEffect(() => {
    const term = new Terminal({
      cursorBlink: true,
      fontSize: 15,
      fontFamily: "SFMono-Regular, Consolas, monospace",
      theme: {
        background: "#1e1e1e",
        foreground: "#ffffff",
        cursor: "#ffffff",
      },
    });

    const fitAddon = new FitAddon();

    term.loadAddon(fitAddon);

    term.open(terminalRef.current);

    setTimeout(() => fitAddon.fit(), 0);

    term.writeln("Welcome to Harish Kumar Dora's Portfolio");
    term.writeln("");
    term.writeln("Type 'help' to see available commands.");
    term.writeln("");
    term.write("king@hkd:~$ ");

    let command = "";

    term.onData((data) => {
      switch (data) {
        case "\r":
          term.writeln("");

          switch (command.trim()) {
            case "help":
              term.writeln("Available Commands:");
              term.writeln("about");
              term.writeln("skills");
              term.writeln("projects");
              term.writeln("hobbies");
              term.writeln("clear");
              break;

            case "about":
              term.writeln("Hi, I'm Harish Kumar Dora.");
              term.writeln("MERN Stack Developer.");
              break;

            case "skills":
              term.writeln("HTML");
              term.writeln("CSS");
              term.writeln("JavaScript");
              term.writeln("React");
              term.writeln("Node.js");
              term.writeln("Express");
              term.writeln("MongoDB");
              term.writeln("C++");
              
              break;

            case "projects":
              term.writeln("• MacOS Portfolio");
              term.writeln("• Tic TacToe Game using React");
              term.writeln("• Notes App");
              break;

            case "hobbies":
              term.writeln("Playing Cricket, Listening to Music, Travelling, Coding");
              term.writeln("Watching Movies");
              break;

            case "clear":
              term.clear();
              break;

            case "":
              break;

            default:
              term.writeln(`Command not found: ${command}`);
          }

          command = "";
          term.write("\r\nking@hkd:~$ ");
          break;

        case "\u007F":
          if (command.length > 0) {
            command = command.slice(0, -1);
            term.write("\b \b");
          }
          break;

        default:
          command += data;
          term.write(data);
      }
    });

    return () => {
      term.dispose();
    };
  }, []);

  return (
    <MacWindow windowName={windowName} setWindowsState={setWindowsState}>
      <div
        ref={terminalRef}
        style={{
          width: "100%",
          height: "100%",
          padding: "10px",
        }}
      />
    </MacWindow>
  );
};

export default CLI;