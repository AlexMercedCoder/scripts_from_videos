import { useJsonpCall, renderQuery } from "../queries";

function Request() {
  const response = useJsonpCall();

  return renderQuery(response, ({ data, refetch }) => (
    <div>
      <ul>
        {Object.keys(data).map((k) => (
          <li>
            {k}:{data[k]}
          </li>
        ))}
      </ul>
      <button onClick={() => refetch()}>Refetch</button>
    </div>
  ));
}

export default Request;
