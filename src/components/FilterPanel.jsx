import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';
import { clearFilter, removeFilter } from 'UI/filters/filter-actions';
import { selectFilters } from 'UI/filters/filter-selectors';
import { useDispatch, useSelector } from 'react-redux';

const FilterPanel = () => {
  const currentFilters = useSelector(selectFilters);
  const dispatch = useDispatch();

  if (currentFilters.length === 0) {
    return null;
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilters.map((filter) => (
            <Badge key={filter} variant="clearable" onClear={() => dispatch(removeFilter(filter))}>
              {filter}
            </Badge>
          ))}
        </Stack>

        <button onClick={() => dispatch(clearFilter)} className="link">
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
