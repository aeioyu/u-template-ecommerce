interface SelectPageInfoFromSlug {
  pageType: string;
  pageId: string;
}

export const selectPageInfoFromSlug = (slug: string | string[]): SelectPageInfoFromSlug => {
  const castedString = Array.isArray(slug) ? slug : [slug];
  const slugArray = castedString?.join('/')?.split('-') || [];
  const slugFormated = slugArray[slugArray.length - 1]?.split('.');
  const pageType = slugFormated[0] || '';
  const pageId = slugFormated[1] || '';

  return { pageType, pageId };
};
