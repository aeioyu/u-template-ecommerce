interface selectSlugIdFromUrlResponse {
  pageType: string;
  pageId: string;
}

export const selectSlugIdFromUrl = (slug: string | string[]): selectSlugIdFromUrlResponse => {
  const castedString = Array.isArray(slug) ? slug : [slug];
  const slugArray = castedString?.join('/')?.split('-') || [];
  const slugFormated = slugArray[slugArray.length - 1]?.split('.');
  const pageType = slugFormated[0] || '';
  const pageId = slugFormated[1] || '';

  return { pageType, pageId };
};
