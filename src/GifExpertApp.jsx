import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

  const addCategory = (category) => {
    if (categories.includes(category)) return;

    // setCategories([...categories, category]);
    // show the last added category first
    setCategories([category, ...categories]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory onNewCategory={addCategory} />
        {
          categories.map((category) => (<GifGrid key={category} category={category}/>))
        }
    </>
  )
}