## Prueba
### Como ejecutar el código: 
- **Clonar el siguiente repositorio :**   ```git clone https://github.com/folayao/Mach8FelipeOlayaOspina.git```
- **Preparar el ambiente para la ejecución :** Dirijase a la terminal e ingrese el comando ``` npm install ``` para instalar la dependencia **AXIOS**
- **Ejecutar :** Al haber finalizado la instalacion, verifique que cuenta con internet para ejecutar el comando ``` npm run start``` 
- Al final de la ejecución obtendra el tiempo transcurrido despues de haber ingresado el valor en *in* que deseó consultar 

# Explicación

El codigo consta de una función llamada ```compare()```, esta recibe dos parametros, uno es el arreglo el cual es consultado por medio de axios y otro es el número para el cual se desea hacer la comparacion de las sumas para cada jugador, lo que hace basicamente la funcion para no tener que recorrer un arreglo y esporadicamente encontrar similitudes ya halladas es ir realizando un ``splice()`` de los indices que se le van entregando, así, el arreglo que irá recorriendo con el paso de las operaciones será más y más corto ahorrando tiempo de ejecución.