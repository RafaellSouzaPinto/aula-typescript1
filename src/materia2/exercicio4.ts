interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

class Usuario {
    constructor(public nome: string, public email: string) {}
}

class RepositorioDeUsuarios implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];

    salvar(dado: Usuario): void {
        this.usuarios.push(dado);
    }

    obterTodos(): Usuario[] {
        return this.usuarios;
    }

}

const repositorio = new RepositorioDeUsuarios();

repositorio.salvar(new Usuario("João", "joao@example.com"));
repositorio.salvar(new Usuario("Maria", "maria@example.com"));

const usuarios = repositorio.obterTodos();
console.log(usuarios);

