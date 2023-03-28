import React from 'react';

const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand " href="#">aShIk.M</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav ms-5">
        <li class="nav-item bg-warning border rounded  ms-5">
          <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link border rounded ms-2 text-warning" href="#">Counties</a>
        </li>
        <li class="nav-item">
          <a class="nav-link border rounded ms-2 text-warning" href="#"> About </a>
        </li>
        <li class="nav-item">
          <a class="nav-link border rounded ms-2 text-warning disabled mx-3"> Visit Country </a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    );
};

export default Header;