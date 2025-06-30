import React, {useEffect} from 'react';
import Panels, {Panel, Header} from '@enact/sandstone/Panels';
import Scroller from '@enact/sandstone/Scroller';
import Repeater from '@enact/ui/Repeater';
import Spotlight from '@enact/spotlight';
import Spottable from '@enact/spotlight/Spottable';
import css from './Kitten.module.less'; // reuse your .kitten styles

// Simple item — no Image, just text for clarity
const ItemBase = ({index, onSelect, ...rest}) => (
  <div
    {...rest}
    className={css.kitten}
    tabIndex="-1"
    role="button"
    onClick={() => onSelect({index})}
  >
    Item #{index}
  </div>
);

const Item = Spottable(ItemBase);

export default function SpotlightTest() {
  useEffect(() => {
    Spotlight.setPointerMode(false);
    setTimeout(Spotlight.focus, 100); // Give time for render
  }, []);

  const handleSelect = ({index}) => console.log(`Selected ${index}`);

  return (
    <Panels>
      <Panel>
        <Header title="Test List" />
        <Scroller focusableScrollbar={false}>
          <Repeater childComponent={Item} indexProp="index" itemProps={{onSelect: handleSelect}}>
            {Array.from({length: 10}, (_, i) => `Item ${i}`)}
          </Repeater>
        </Scroller>
      </Panel>
    </Panels>

  );
};
