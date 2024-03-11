import { collection, getDocs } from "firebase/firestore";
import { dbFirestore } from "../firebase";

export const fetchData = async () => {
  try {
    const querySnapshot = await getDocs(
      collection(dbFirestore, "rainbow_products")
    );

    let agrupados = {};
    querySnapshot.forEach((doc) => {
      const valorCod = doc.data().cod;

      if (!agrupados[valorCod]) {
        agrupados[valorCod] = [];
      }

      agrupados[valorCod].push(doc.data());
    });

    return agrupados;
  } catch (error) {
    console.error("Error al obtener documentos:", error);
  }
};
