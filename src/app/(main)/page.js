import { redirect } from "next/navigation";

const defaultCategoryId = 0
export default async function Home() {
  redirect(`/category/${defaultCategoryId}`)
}
