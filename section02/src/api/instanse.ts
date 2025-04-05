export default async function getInterFace<T>(url: string): Promise<T | null> {
  try {
    const response = await fetch(`http://localhost:12345/${url}`);
    if (!response.ok) {
      throw new Error();
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(err);
    return null;
  }
}
