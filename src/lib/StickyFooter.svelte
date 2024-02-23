<style>
.not-footer {
  min-height: 100%;
  margin-bottom: -80px;
}

.not-footer:after {
  content: "";
  display: block;
  height: 100px;
}

.wrapper-footer {
  height: 80px;
  border-top: 1px solid var(--background-off2);
}

footer {
  height: 80px;
  text-align: center;
  background-color: var(--background-off);
}
</style>
<div class="not-footer">
    <slot name="main" />
</div>
<div class="wrapper-footer">
    <footer>
        <slot name="footer" />
    </footer>
</div>