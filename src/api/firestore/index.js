import { collection, getDocs } from "firebase/firestore";
import { dbFirestore } from "../firebase";

export const fetchData = async () => {
  try {
    const querySnapshot = await getDocs(
      collection(dbFirestore, "rainbow_products")
    );

    let arrayResultados = [];
    querySnapshot.forEach((doc) => {
      const valorCod = doc.data().cod || "SinCategoria";
      const index = arrayResultados.findIndex(
        (item) => item.categoria === valorCod
      );

      const talle = doc.data().talle;
      const color = doc.data().color;

      if (index === -1) {
        // Si no existe, agregar una nueva categoría con el producto
        arrayResultados.push({
          categoria: valorCod,
          nombre: doc.data().nombre,
          precio: doc.data().precio,
          foto: doc.data().foto,
          talles: new Set([talle]),
          colores: new Set([color]),
        });
      } else {
        // Si ya existe, agregar el producto a la categoría existente
        arrayResultados[index].talles.add(talle);
        arrayResultados[index].colores.add(color);
      }
    });

    // Convertir los conjuntos a arrays
    arrayResultados.forEach((item) => {
      item.talles = Array.from(item.talles);
      item.colores = Array.from(item.colores);

      // Ordenar los arrays de talles numéricamente
      item.talles.sort(
        (a, b) => parseInt(a.slice(1), 10) - parseInt(b.slice(1), 10)
      );
    });

    // Ordenar el array de resultados por categoría
    arrayResultados.sort((a, b) => a.categoria.localeCompare(b.categoria));

    return arrayResultados;
  } catch (error) {
    console.error("Error al obtener documentos:", error.message);
    // Puedes lanzar o manejar el error según tus necesidades
    throw error;
  }
};
