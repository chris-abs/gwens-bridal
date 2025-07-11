import { useAuthStore } from "@/stores/useAuthStore";

const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:8080";

export async function fetchImagesByCategory(category: string) {
  const response = await fetch(`${API_BASE}/api/images?category=${category}`);
  if (!response.ok) throw new Error("Failed to fetch images");
  return response.json();
}

export async function uploadImage(file: File, category: string) {
  const token = useAuthStore.getState().token;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("category", category);

  const response = await fetch(`${API_BASE}/api/admin/images`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: formData,
  });

  if (!response.ok) throw new Error("Upload failed");
  return response.json();
}

export async function deleteImage(id: number) {
  const token = useAuthStore.getState().token;
  const response = await fetch(`${API_BASE}/api/admin/images/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) throw new Error("Delete failed");
  return response.json();
}
