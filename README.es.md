<!--hide-->
# Contador Simple con React
<!--endhide-->

React mejora la creación de componentes personalizados, que puedes representar a través de tu aplicación web utilizando el método **ReactDOM.render()**. Un componente personalizado te permite dividir y conquistar, separando los desafíos lógicos y visuales en partes más pequeñas, lo que le brinda un mayor control sobre la pantalla y las funcionalidades de cada parte de la aplicación web.

Por ejemplo, para crear un componente bootstrap `<Card />` codificarías esto:

```jsx
function Card(props){
    return (
        <div className="card">
            <img className="card-img-top" src="http://via.placeholder.com/350x150" alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
```gi

Después de declararlo, puedes *importar* y *utilizar* en tu aplicación web de esta manera:

```jsx
//import react al bundle
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './component/Card.jsx'

ReactDOM.render(<Card />, document.quertSelector('#root'));
```

Adicionalmente, puedes pasar información a través de *props*=

```jsx

// Uso del componente personalizado.
<Card imageUrl="http://via.placeholder.com/350x150" title="A nice image" />

```

... Para uso dentro del método de renderización de su componente:

```jsx
//Declaration of custom component (Card.jsx)

function Card(props){
    return (
        <div className="card">
            <img className="card-img-top" src={props.imageUrl} alt="Card image cap" />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and fill the card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}
```

## 🌱 Cómo comenzar este proyecto

No clones este repositorio porque vamos a usar una plantilla diferente.

Recomendamos abrir el `react boilerplate` usando una herramienta de aprovisionamiento como [Codespaces](https://4geeks.com/es/lesson/tutorial-de-github-codespaces) (recomendado) o [Gitpod](https://4geeks.com/es/lesson/como-utilizar-gitpod). Alternativamente, puedes clonarlo en tu computadora local usando el comando `git clone`.

Este es el repositorio que necesitas abrir o clonar:

```
https://github.com/4GeeksAcademy/react-hello
```

**👉 Por favor sigue estos pasos** [cómo comenzar un proyecto de codificación](https://4geeks.com/es/lesson/como-comenzar-un-proyecto-de-codificacion).

💡 Importante: Recuerda guardar y subir tu código a GitHub creando un nuevo repositorio, actualizando el remoto (`git remote set-url origin <your new url>`) y subiendo el código a tu nuevo repositorio usando los comandos `add`, `commit` y `push` desde la terminal de git.

# 📝 Instrucciones

Crea un componente de contador de segundos, llamado ***SecondsCounter***. Debería verse [como este](https://github.com/breatheco-de/exercise-simple-counter-react/blob/master/preview.gif).

- El propósito principal del componente es mostrar cuántos segundos han pasado desde que el sitio web terminó de cargarse (onLoad).
- Use el ***ReactDOM.render()*** para representar el componente en la aplicación web.
- Use la función ***setInterval()*** para volver a renderizar el componente cada segundo.
- El componente no necesita un estado local, puede pasar la cantidad de segundos como **props** de la siguiente manera:

```jsx
<SecondsCounter seconds={3434} />
```
- Puedes encontrar el icono del reloj a la izquierda del componente en [Font Awesome](https://fontawesome.com/).

# 🔥 Bono
- Crear una opción de cuenta regresiva a partir de un número dado.
- Crear funciones de parada, reinicio y reanudación
- Crear una alerta cuando el usuario llega a un tiempo específico, es decir, el usuario ingresa "10", una alerta debería mostrarse notificando al usuario que se alcanzó su tiempo

Este y otros proyectos son usados para [aprender a programar](https://4geeksacademy.com/es/aprender-a-programar/aprender-a-programar-desde-cero) por parte de los alumnos de 4Geeks Academy [Coding Bootcamp](https://4geeksacademy.com/us/coding-bootcamp) realizado por [Alejandro Sánchez](https://twitter.com/alesanchezr) y muchos otros contribuyentes. Conoce más sobre nuestros [Curso de Programación](https://4geeksacademy.com/es/curso-de-programacion-desde-cero?lang=es) para convertirte en [Full Stack Developer](https://4geeksacademy.com/es/coding-bootcamps/desarrollador-full-stack/?lang=es), o nuestro [Data Science Bootcamp](https://4geeksacademy.com/es/coding-bootcamps/curso-datascience-machine-learning).