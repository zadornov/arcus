const baseUrl =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:8080/api'
    : `https://${window.location.hostname}/api`;

const methods = {
  get: async function (endpoint: any, token = null) {
    const options = {
      method: 'GET',
      headers: {
        // @ts-expect-error TS(2698) FIXME: Spread types may only be created from object types... Remove this comment to see the full error message
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };

    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    const json = await response.json();

    if (!response.ok) throw Error(json.message);

    return json;
  },

  post: async function (endpoint: any, body: any, token = null) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // @ts-expect-error TS(2698) FIXME: Spread types may only be created from object types... Remove this comment to see the full error message
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      body: JSON.stringify(body),
    };

    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    const json = await response.json();

    if (!response.ok) {
      if (response.status === 422) {
        json.errors.forEach((error: any) => {
          throw Error(`${error.param} ${error.msg}`);
        });
      }

      throw Error(json.message);
    }

    return json;
  },

  delete: async function (endpoint: any, token = null) {
    const options = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        // @ts-expect-error TS(2698) FIXME: Spread types may only be created from object types... Remove this comment to see the full error message
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    };

    const response = await fetch(`${baseUrl}/${endpoint}`, options);
    const json = await response.json();

    if (!response.ok) {
      if (response.status === 401) throw Error('unauthorized');
      throw Error(json.message);
    }

    return json;
  },
};

export async function login(username: any, password: any) {
  const json = await methods.post('login', { username, password });
  return json.token;
}

export async function signup(username: any, password: any) {
  const json = await methods.post('register', { username, password });
  return json.token;
}

export async function getPosts(category: any) {
  return await methods.get(`posts/${category}`);
}

export async function getProfile(username: any) {
  return await methods.get(`user/${username}`);
}

export async function getPost(id: any) {
  return await methods.get(`post/${id}`);
}

export async function createPost(body: any, token: any) {
  return await methods.post('posts', body, token);
}

export async function deletePost(id: any, token: any) {
  return await methods.delete(`post/${id}`, token);
}

export async function createComment(post: any, comment: any, token: any) {
  return await methods.post(`post/${post}`, comment, token);
}

export async function deleteComment(post: any, comment: any, token: any) {
  return await methods.delete(`post/${post}/${comment}`, token);
}

export async function castVote(id: any, vote: any, token: any) {
  const voteTypes = {
    '1': 'upvote',
    '0': 'unvote',
    '-1': 'downvote',
  };

  // @ts-expect-error TS(7053) FIXME: Element implicitly has an 'any' type because expre... Remove this comment to see the full error message
  const voteType = voteTypes[vote];

  return await methods.get(`post/${id}/${voteType}`, token);
}
