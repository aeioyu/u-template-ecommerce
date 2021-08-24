import Text from '@/components/common/Text';
import Link from 'next/link';
import React from 'react';

export interface MegaMenuProps {
  categories: {
    id: number;
    slug: string;
    name: string;
  }[];
}

const MegaMenu: React.FC<MegaMenuProps> = ({ categories }) => {
  return (
    <div className="py-4 overflow-auto" style={{ height: 56 }}>
      {categories?.map((category) => (
        <Text variant="body" key={category.id} className="mr-6">
          <Link href={`/${category.slug}-cat.${category.id}`}>{category.name}</Link>
        </Text>
      ))}
    </div>
  );
};

export default MegaMenu;
