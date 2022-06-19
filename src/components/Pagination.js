import React from "react";
import { getAllProducts, getProductsBycategory } from "../redux/apiReduxCalls";

const Pagination = ({ setCurrentPage, currentPage, numOfPages, dispatch }) => {
  console.log("Pagination");

  const renderPagination = () => {
    if (currentPage === numOfPages && currentPage === 1) return null;
    if (currentPage === 1 && currentPage < numOfPages) {
      {
        console.log("Pagination one");
      }
      return (
        <div>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  {currentPage}
                </a>
              </li>
              <li
                class="page-item"
                onClick={() => {
                  dispatch(setCurrentPage(currentPage + 1));
                  // const data = getAllProducts(currentPage);
                  // dispatch(temp(data?.data));
                  // console.log(data?.data);
                }}
              >
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      );
    } else if (currentPage !== 1 && currentPage < numOfPages) {
      {
        console.log("Pagination two");
      }
      return (
        <div>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item " onClick={() => dispatch(setCurrentPage(currentPage - 1))} style={{ cursor: "pointer" }}>
                <a class="page-link">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  {currentPage}
                </a>
              </li>
              <li class="page-item" onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      );
    } else if (currentPage !== 1 && currentPage === numOfPages) {
      {
        console.log("Pagination three");
      }
      return (
        <div>
          <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-center">
              <li class="page-item " onClick={() => dispatch(setCurrentPage(currentPage - 1))} style={{ cursor: "pointer" }}>
                <a class="page-link">Previous</a>
              </li>
              <li class="page-item">
                <a class="page-link" href="#">
                  {currentPage}
                </a>
              </li>
              <li class="page-item" onClick={() => dispatch(setCurrentPage(currentPage + 1))}>
                <a class="page-link" href="#">
                  Next
                </a>
              </li>
            </ul>
          </nav>
        </div>
      );
    }
  };
  return (
    <div>
      <>{renderPagination()}</>
    </div>
  );
};

export default Pagination;
