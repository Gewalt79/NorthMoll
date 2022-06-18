import { Octokit } from 'octokit';
import issueDto from './issue.dto.js';
import customFilter from './customFilter.js';

const octokit = new Octokit({
  auth: 'Here must be your github access token',
});

class Service {
  async getIssues(body) {
    const data = issueDto(body);

    if (typeof data === 'string') {
      return data;
    }

    const newIssues = await octokit.request(`GET /repos/${data.company}/${data.repo}/issues`, {
      owner: data.company,
      repo: data.repo,
      sort: data.sort,
    });

    return customFilter(body.filter, newIssues.data);
  }
}

export default new Service();
