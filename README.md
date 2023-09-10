## StudyNotes Front
###### Que es?
StudyNotes es una aplicación en la que los usuarios podrán crear y
compartir apuntes de cualquier tipo, ya sean resúmenes para la
escuela o universidad, recetas de comidas, estudios de idiomas,
crear documentación, etc

###### Tecnologias usadas:
- Vite
- React
- Typescript
- Sass
- Jest & react-testing-library


#### Como bajar y correr el proyecto en local
###### Dependencias:
- Node y npm
- Git

###### Pasos:
1) Clonar el repositorio con el comando: <br/> `git clone git@github.com:CardozoCasariegoLuciano/StudyNotes-Frontend.git`
2) Instalar las dependencias con `npm install` dentro de la carpeta "StudyNotes-Fronend"
3) Levantar el proyecto con `npm install`

- Nota: Para que funcione correctamente también hay que tener levantado el [Backend](https://github.com/CardozoCasariegoLuciano/StudyNotes-backend)
    de la aplicación

#### Como trabajamos
En la aplicación estamos aplicando el git flow lo que implica:

1) cuando se esta desarrollando una funcionalidad o característica nueva tenemos que
crear una rama nueva a partir de `develop`
2) Esa rama que creemos tiene que tener como nombre la incidencia de Jira (ver en Links importantes)
de la tarea que estemos tratando
- Ejemplo `SNTAB-1232`
3) Cada commit que hagamos tiene que comenzar con el nombre de la rama, seguido del
    resumen de lo realizado en el commit
4) Una vez terminada la funcionalidad la pusheamos al repositorio remoto
    y desde ahi creamos una Pull Request a `develop`
5) Las Pull Request tienen que ser revisadas y aprobadas para poder realizar el merge
    a la rama develop

#### Links importantes
- [swager](http://localhost:5000/swagger/index.html):
   documentación de la API del backend (requiere tener el backen en local corriendo)
- [Jira](https://studynotes-project.atlassian.net/jira/software/projects/SNTAB/boards/1):
    Estado de las tareas actuales
- [Figma](https://www.figma.com/file/ifSIZqKuHld2q15debAYky/StudiesNotesApp?node-id=115%3A445&t=zR3M3cv3vdtcF78P-1):
    Diseño de la aplicación
- [FigJam](https://www.figma.com/file/5JzllwcWgURAKeaQvyBXMs/StudyNotes?node-id=0%3A1&t=MGov6Z7RawYZ7i7q-1):
    Estructura y planes a futuro de la aplicación


#### Test
###### Para correr todos los test: `npm run test`

#### Linter
###### Para correr el linter `npm run lint`
###### Para correr el linter que se ejecutara al intentar mergear a la rama dev o master `npm run pipeline-lint`
###### Para fixear todos los problemas en el proyecto `npm run lint-fix` (dentro de lo que se pueda)
