## neoCK React CLI

The neoCK React CLI is a command-line interface for generate components, services, interfaces, hooks, schemas and zustand stores

## Installation

Clone the code via SSH

```bash
  git clone git@github.com:EquipoITNeoCK/React-CLI
  cd React-CLI
  npm install -g .
```

Or clone it via NPM

```bash
  npm install -g @julioneock/react-cli
```

## Usage/Examples

To use this CLI you should write in console the next:

```bash
  re generate option <file_name> or re g option <file_name>
```

<b>OPTIONS</b>

```
  - component o c if you want to create components.
  - service o s if you want a service file.
  - hook or h if you want some hook.
  - interface or i if you want an interface.
  - zustand or z if is a zustand store file.
  - schema o sc if yup schema is required.
  - environments o envs to create environments folder and files
```

An example here

```bash
  re generate component login
```

<b>OR</b>

Includes "" if your file to create has some spaces.

```bash
  re g c "component with spaces"
```
