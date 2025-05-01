const Filter = () => {
  return (
    <div className="mt-12 flex justify-between">
      <div className="flex gap-6 flex-wrap">
        <select
          name="type"
          id=""
          className="py-2 pr-4 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
                      <option>Материал</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <input type="text" name="min" placeholder="Mин цена"  className="text-xs rounded-2xl pl-2 w-24 ring-1 bg-cream ring-gray-400"/>
        <input type="text" name="min" placeholder="Mакс цена"  className="text-xs rounded-2xl pl-2 w-24 ring-1 bg-cream ring-gray-400"/>
        <select
          name="type"
          id=""
          className="py-2 pr-4 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
                      <option>Материал</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 pr-4 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
                      <option>Материал</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 pr-4 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
                      <option>Материал</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
        <select
          name="type"
          id=""
          className="py-2 pr-4 px-4 rounded-2xl text-xs font-medium bg-[#EBEDED]"
        >
                      <option>Материал</option>
          <option value="physical">Physical</option>
          <option value="digital">Digital</option>
        </select>
      </div>
      <div className="">
      <select
          name="sort"
          id=""
          className="py-2 px-4 rounded-2xl text-xs font-medium bg-cream ring-1 ring-gray-400"
        >
          <option>Сортирай</option>
          <option value="asc price">Price (low to high)</option>
          <option value="desc price">Price (high to low)</option>
          <option value="asc lastUpdated">Newest</option>
          <option value="desc lastUpdated">Oldest</option>
        </select>
      </div>
    </div>
  );
};
export default Filter;
