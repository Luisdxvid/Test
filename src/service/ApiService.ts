import BaseService from "./BaseService";

class ApiService extends BaseService {
  async loadData() {
    try {
      const response = await this.axios.get("/boards.json");
      // Filtrar solo los campos que quieres mostrar
      return response.data.map((item: any) => ({
        title: item.title,
        pages: item.pages,
        meta_description: item.meta_description,
      }));
    } catch (e) {
      console.error("Error loading data:", e);
      return [];
    }
  }
}

export default ApiService;
