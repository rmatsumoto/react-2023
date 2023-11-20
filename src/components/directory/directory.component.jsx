import CategoryItemComponent from "../category-item/category-item.component";
import './directory.styles.scss';

const DirectoryComponent = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map((category) => {
        return (
          <CategoryItemComponent key={category.id} category={category} />
        )
      })}
    </div>
  );
}

export default DirectoryComponent;