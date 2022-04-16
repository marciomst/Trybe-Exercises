import React from 'react';
import { Link } from 'react-router-dom';

// Adicionar links no sidebar ✅
// Fazer com que os links renderizem os respectivos componentes
class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      links: [
        { name: 'Agenda', link: '/agenda' },
        { name: 'Projetos', link: '/projetos' },
        { name: 'Aula ao vivo Ciclo de Vida', link: '/aula-ao-vivo/0' },
        { name: 'Aula ao vivo Router', link: '/aula-ao-vivo/1' },
        { name: 'Trybe Talks', link: '/trybe-talks' },
      ],
    };
  }

  render() {
    const { links } = this.state;
    return (
      <section className="Sidebar">
        <h4>Curso</h4>
        <nav>
          {links.map((link) => (
            <Link key={ link.name } to={ link.link }>{link.name}</Link>
          ))}
        </nav>
      </section>

    );
  }
}

export default Sidebar;
