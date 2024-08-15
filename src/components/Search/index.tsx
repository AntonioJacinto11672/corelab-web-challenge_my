import './search.scss'
interface ISearch {
  placeholder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search = (props: ISearch) => {
  return (
    <>

      <input type="text" placeholder={props.placeholder} onChange={props.onChange} />
      <span>
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.8914 13.8464L7.47727 9.12144C7.12695 9.42144 6.72407 9.65894 6.26864 9.83393C5.81321 10.0089 5.32859 10.0964 4.81477 10.0964C3.54191 10.0964 2.46477 9.62469 1.58334 8.68119C0.701445 7.73719 0.260498 6.58394 0.260498 5.22144C0.260498 3.85894 0.701445 2.70569 1.58334 1.76169C2.46477 0.818186 3.54191 0.346436 4.81477 0.346436C6.08764 0.346436 7.16501 0.818186 8.04691 1.76169C8.92834 2.70569 9.36905 3.85894 9.36905 5.22144C9.36905 5.77144 9.28731 6.29019 9.12382 6.77769C8.96033 7.26519 8.73846 7.69644 8.4582 8.07144L12.8723 12.7964L11.8914 13.8464ZM4.81477 8.59644C5.6906 8.59644 6.43516 8.26844 7.04847 7.61244C7.66131 6.95594 7.96773 6.15894 7.96773 5.22144C7.96773 4.28394 7.66131 3.48694 7.04847 2.83044C6.43516 2.17444 5.6906 1.84644 4.81477 1.84644C3.93895 1.84644 3.19439 2.17444 2.58108 2.83044C1.96823 3.48694 1.66181 4.28394 1.66181 5.22144C1.66181 6.15894 1.96823 6.95594 2.58108 7.61244C3.19439 8.26844 3.93895 8.59644 4.81477 8.59644Z" fill="#9E9E9E" />
        </svg>
      </span>

    </>
  );
};

export default Search;
