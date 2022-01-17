import { carregaTarefa } from "./Componentes/carregaTarefa.js";
import { handleNovoItem } from "./Componentes/criaTarefa.js";

const novaTarefa = document.querySelector ('[data-form-button]');
novaTarefa.addEventListener('click', handleNovoItem);

carregaTarefa();
