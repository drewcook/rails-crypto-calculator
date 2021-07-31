class CreateCurrencies < ActiveRecord::Migration[6.1]
  def change
    create_table :currencies do |t|
      t.string :name
      t.string :description
      t.bigint :maxsupply
      t.string :currency_symbol
      t.string :slug

      t.timestamps
    end
  end
end
