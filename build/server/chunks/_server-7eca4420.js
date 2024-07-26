import { j as json } from './index-d7f43214.js';
import { a as auth, s as store, b as GetMonitorStatusByTag } from './webhook-337fa68d.js';
import 'fs-extra';
import './shared-server-58a5f352.js';
import './helpers-0acb6e43.js';
import './tool-fedc40bc.js';
import './github-16ec50f4.js';
import 'axios';
import 'marked';
import 'randomstring';

async function POST({ request }) {
  const payload = await request.json();
  const authError = auth(request);
  if (authError !== null) {
    return json(
      { error: authError.message },
      {
        status: 401
      }
    );
  }
  let resp = store(payload);
  return json(resp, {
    status: resp.status
  });
}
async function GET({ request, url }) {
  const authError = auth(request);
  if (authError !== null) {
    return json(
      { error: authError.message },
      {
        status: 401
      }
    );
  }
  const query = url.searchParams;
  const tag = query.get("tag");
  if (!!!tag) {
    return json(
      { error: "tag missing" },
      {
        status: 400
      }
    );
  }
  return json(GetMonitorStatusByTag(tag), {
    status: 200
  });
}

export { GET, POST };
//# sourceMappingURL=_server-7eca4420.js.map
