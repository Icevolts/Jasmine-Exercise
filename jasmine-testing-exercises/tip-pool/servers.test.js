describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should update serverTable with updateServerTable()',function(){
    submitServerInfo();
    updateServerTable();
    let currentTable = document.querySelectorAll("#serverTable tbody tr td");
    expect(currentTable.length).toEqual(3);
    expect(currentTable[0]).toEqual('Alice');
    expect(currentTable[1]).toEqual('$0.00');
    expect(currentTable[2]).toEqual('X');
  })  

  afterEach(function() {
    serverId = 0;
    allServers = {};
    serverTbody.innerHTML = ''
  });
});
