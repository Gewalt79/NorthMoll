function issueDto(data) {
  /**@type {string} company */
  let company;
  /**@type {string} repo */
  let repo;
  /**@type {string} sort */
  let sort;

  if (data.sort === 'created' || data.sort === 'updated' || data.sort === 'comments') {
    return {
      company: data.company,
      repo: data.repo,
      sort: data.sort,
    };
  } else {
    throw 'Wrong "sort" type';
  }
}

export default issueDto;
